import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Create admin user
    const adminEmail = "admin@growthcraft.in";
    const adminPassword = "GrowthCraft@2026";

    // Check if user already exists
    const { data: existingUsers } = await supabase.auth.admin.listUsers();
    const existingAdmin = existingUsers?.users?.find(u => u.email === adminEmail);

    if (existingAdmin) {
      // Update the profile to be platform_admin
      await supabase
        .from("profiles")
        .update({ role: "platform_admin", full_name: "Super Admin" })
        .eq("user_id", existingAdmin.id);

      return new Response(
        JSON.stringify({ message: "Admin user already exists, profile updated" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create new admin user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
    });

    if (authError) {
      throw authError;
    }

    // Update the profile to be platform_admin (trigger should have created it)
    if (authData.user) {
      await supabase
        .from("profiles")
        .update({ role: "platform_admin", full_name: "Super Admin" })
        .eq("user_id", authData.user.id);
    }

    return new Response(
      JSON.stringify({ 
        message: "Admin user created successfully",
        email: adminEmail,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

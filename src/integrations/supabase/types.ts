export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      bootcamps: {
        Row: {
          batch_size: number | null
          category: string | null
          created_at: string
          created_by: string | null
          curriculum: Json | null
          description: string | null
          discount_label: string | null
          discount_price: number | null
          duration: string | null
          format: string | null
          highlights: string[] | null
          icon_name: string | null
          id: string
          image_url: string | null
          instructor_bio: string | null
          instructor_name: string | null
          is_featured: boolean
          is_published: boolean
          learning_outcomes: string[] | null
          next_batch_date: string | null
          prerequisites: string[] | null
          price: number | null
          slug: string | null
          tech_stack: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          batch_size?: number | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          curriculum?: Json | null
          description?: string | null
          discount_label?: string | null
          discount_price?: number | null
          duration?: string | null
          format?: string | null
          highlights?: string[] | null
          icon_name?: string | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_name?: string | null
          is_featured?: boolean
          is_published?: boolean
          learning_outcomes?: string[] | null
          next_batch_date?: string | null
          prerequisites?: string[] | null
          price?: number | null
          slug?: string | null
          tech_stack?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          batch_size?: number | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          curriculum?: Json | null
          description?: string | null
          discount_label?: string | null
          discount_price?: number | null
          duration?: string | null
          format?: string | null
          highlights?: string[] | null
          icon_name?: string | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_name?: string | null
          is_featured?: boolean
          is_published?: boolean
          learning_outcomes?: string[] | null
          next_batch_date?: string | null
          prerequisites?: string[] | null
          price?: number | null
          slug?: string | null
          tech_stack?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      colleges: {
        Row: {
          address: string | null
          city: string | null
          contact_person: string | null
          created_at: string
          email: string | null
          id: string
          is_active: boolean
          name: string
          partnership_type: string | null
          phone: string | null
          state: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          contact_person?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name: string
          partnership_type?: string | null
          phone?: string | null
          state?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          contact_person?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name?: string
          partnership_type?: string | null
          phone?: string | null
          state?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      content_pages: {
        Row: {
          content: Json | null
          created_at: string
          created_by: string | null
          id: string
          is_published: boolean
          meta_description: string | null
          meta_title: string | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          content?: Json | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_published?: boolean
          meta_description?: string | null
          meta_title?: string | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: Json | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_published?: boolean
          meta_description?: string | null
          meta_title?: string | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_pages_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          category: string
          created_at: string
          created_by: string | null
          curriculum: Json | null
          description: string | null
          discount_label: string | null
          discount_price: number | null
          duration: string | null
          format: string | null
          highlights: string[] | null
          id: string
          image_url: string | null
          instructor_bio: string | null
          instructor_name: string | null
          is_featured: boolean
          is_published: boolean
          learning_outcomes: string[] | null
          level: string | null
          prerequisites: string[] | null
          price: number | null
          slug: string | null
          subcategory: string | null
          title: string
          topics: string[] | null
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          created_by?: string | null
          curriculum?: Json | null
          description?: string | null
          discount_label?: string | null
          discount_price?: number | null
          duration?: string | null
          format?: string | null
          highlights?: string[] | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_name?: string | null
          is_featured?: boolean
          is_published?: boolean
          learning_outcomes?: string[] | null
          level?: string | null
          prerequisites?: string[] | null
          price?: number | null
          slug?: string | null
          subcategory?: string | null
          title: string
          topics?: string[] | null
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string | null
          curriculum?: Json | null
          description?: string | null
          discount_label?: string | null
          discount_price?: number | null
          duration?: string | null
          format?: string | null
          highlights?: string[] | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_name?: string | null
          is_featured?: boolean
          is_published?: boolean
          learning_outcomes?: string[] | null
          level?: string | null
          prerequisites?: string[] | null
          price?: number | null
          slug?: string | null
          subcategory?: string | null
          title?: string
          topics?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      employers: {
        Row: {
          company_name: string
          company_size: string | null
          contact_person: string | null
          created_at: string
          email: string | null
          hiring_needs: string | null
          id: string
          industry: string | null
          is_active: boolean
          phone: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          company_name: string
          company_size?: string | null
          contact_person?: string | null
          created_at?: string
          email?: string | null
          hiring_needs?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean
          phone?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          company_name?: string
          company_size?: string | null
          contact_person?: string | null
          created_at?: string
          email?: string | null
          hiring_needs?: string | null
          id?: string
          industry?: string | null
          is_active?: boolean
          phone?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      enquiries: {
        Row: {
          assigned_to: string | null
          created_at: string
          email: string
          enquiry_type: string
          id: string
          message: string | null
          name: string
          notes: string | null
          phone: string | null
          source_page: string | null
          status: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          email: string
          enquiry_type?: string
          id?: string
          message?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          source_page?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          email?: string
          enquiry_type?: string
          id?: string
          message?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          source_page?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "enquiries_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          domain: string | null
          duration: string | null
          event_date: string | null
          event_time: string | null
          event_type: string | null
          highlights: string[] | null
          id: string
          image_url: string | null
          is_featured: boolean
          is_online: boolean
          is_published: boolean
          location: string | null
          max_participants: number | null
          prerequisites: string[] | null
          price: number | null
          registration_link: string | null
          slug: string | null
          speaker_bio: string | null
          speaker_name: string | null
          title: string
          topics: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          domain?: string | null
          duration?: string | null
          event_date?: string | null
          event_time?: string | null
          event_type?: string | null
          highlights?: string[] | null
          id?: string
          image_url?: string | null
          is_featured?: boolean
          is_online?: boolean
          is_published?: boolean
          location?: string | null
          max_participants?: number | null
          prerequisites?: string[] | null
          price?: number | null
          registration_link?: string | null
          slug?: string | null
          speaker_bio?: string | null
          speaker_name?: string | null
          title: string
          topics?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          domain?: string | null
          duration?: string | null
          event_date?: string | null
          event_time?: string | null
          event_type?: string | null
          highlights?: string[] | null
          id?: string
          image_url?: string | null
          is_featured?: boolean
          is_online?: boolean
          is_published?: boolean
          location?: string | null
          max_participants?: number | null
          prerequisites?: string[] | null
          price?: number | null
          registration_link?: string | null
          slug?: string | null
          speaker_bio?: string | null
          speaker_name?: string | null
          title?: string
          topics?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          is_active: boolean
          organization: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          organization?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          is_active?: boolean
          organization?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      registrations: {
        Row: {
          amount: number | null
          course_id: string | null
          created_at: string
          email: string
          event_id: string | null
          id: string
          name: string
          notes: string | null
          payment_status: string | null
          phone: string | null
          status: string
          training_program_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          course_id?: string | null
          created_at?: string
          email: string
          event_id?: string | null
          id?: string
          name: string
          notes?: string | null
          payment_status?: string | null
          phone?: string | null
          status?: string
          training_program_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          course_id?: string | null
          created_at?: string
          email?: string
          event_id?: string | null
          id?: string
          name?: string
          notes?: string | null
          payment_status?: string | null
          phone?: string | null
          status?: string
          training_program_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "registrations_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registrations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registrations_training_program_id_fkey"
            columns: ["training_program_id"]
            isOneToOne: false
            referencedRelation: "training_programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          description: string | null
          id: string
          key: string
          updated_at: string
          updated_by: string | null
          value: Json | null
        }
        Insert: {
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          updated_by?: string | null
          value?: Json | null
        }
        Update: {
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "settings_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      training_programs: {
        Row: {
          batch_size: number | null
          category: string | null
          created_at: string
          created_by: string | null
          curriculum: Json | null
          description: string | null
          discount_price: number | null
          domain: string | null
          duration: string | null
          end_date: string | null
          focus_areas: string[] | null
          format: string | null
          highlights: string[] | null
          id: string
          image_url: string | null
          instructor_bio: string | null
          instructor_name: string | null
          is_featured: boolean
          is_published: boolean
          learning_outcomes: string[] | null
          next_batch_date: string | null
          prerequisites: string[] | null
          price: number | null
          slug: string | null
          start_date: string | null
          tech_stack: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          batch_size?: number | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          curriculum?: Json | null
          description?: string | null
          discount_price?: number | null
          domain?: string | null
          duration?: string | null
          end_date?: string | null
          focus_areas?: string[] | null
          format?: string | null
          highlights?: string[] | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_name?: string | null
          is_featured?: boolean
          is_published?: boolean
          learning_outcomes?: string[] | null
          next_batch_date?: string | null
          prerequisites?: string[] | null
          price?: number | null
          slug?: string | null
          start_date?: string | null
          tech_stack?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          batch_size?: number | null
          category?: string | null
          created_at?: string
          created_by?: string | null
          curriculum?: Json | null
          description?: string | null
          discount_price?: number | null
          domain?: string | null
          duration?: string | null
          end_date?: string | null
          focus_areas?: string[] | null
          format?: string | null
          highlights?: string[] | null
          id?: string
          image_url?: string | null
          instructor_bio?: string | null
          instructor_name?: string | null
          is_featured?: boolean
          is_published?: boolean
          learning_outcomes?: string[] | null
          next_batch_date?: string | null
          prerequisites?: string[] | null
          price?: number | null
          slug?: string | null
          start_date?: string | null
          tech_stack?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "training_programs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_slug: { Args: { title: string }; Returns: string }
      get_user_role: {
        Args: never
        Returns: Database["public"]["Enums"]["user_role"]
      }
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      user_role:
        | "platform_admin"
        | "college_admin"
        | "mentor"
        | "employer"
        | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: [
        "platform_admin",
        "college_admin",
        "mentor",
        "employer",
        "student",
      ],
    },
  },
} as const

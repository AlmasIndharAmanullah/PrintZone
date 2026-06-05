import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ckrouquzysjhsifkonju.supabase.co";

const supabaseKey =
  "sb_publishable_XJclR4NF_jzmcIN65WhD7g_KF5CbUpn";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
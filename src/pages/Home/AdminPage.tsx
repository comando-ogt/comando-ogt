import { useEffect, useState } from "react";
import AdminLogin from "../../components/AdminLogin";
import AdminPanel from "../../components/AdminPanel";
import { supabase } from "../../supabase";


export default function AdminPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Revisar sesión actual
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };

    checkSession();

    // Escuchar cambios de sesión
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (!user) return <AdminLogin onLogin={() => {}} />;

  return (
    <div>
      <button
        onClick={async () => {
          await supabase.auth.signOut();
          setUser(null);
        }}
      >
        Cerrar sesión
      </button>
      <AdminPanel />
    </div>
  );
}

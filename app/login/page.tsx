import PovosLogo from "@/app/ui/povos-logo";
import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-30 w-full rounded-lg items-center justify-center bg-gray-50 p-3 md:h-46">
          <div className="flex">
            <PovosLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}

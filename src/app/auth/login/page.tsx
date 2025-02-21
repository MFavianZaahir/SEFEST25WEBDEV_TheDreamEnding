import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";
import { authOptions } from "@/lib/next-auth";
import { getServerSession } from "next-auth";
export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }

  return (
      <LoginForm />
  );
}

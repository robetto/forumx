import Link from "next/link";
import {auth, signOut, signIn} from "@/auth";
import Logo from "@/components/Logo";

const Navbar = async () => {

    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <p className="text-3xl">asd</p>
                    <Logo color="#1C1D2D"/>
                </Link>

                <div className="flex items-center gap-5">
                    {
                        (session && session.user) ? (
                            <>
                                <Link href="/thread/create">
                                    <span>Create</span>
                                </Link>
                                <form action={ async ()=> {
                                    "use server";

                                    await signOut( {
                                        redirectTo: "/"
                                    });
                                }}>
                                    <button type="submit">logout</button>
                                </form>
                                <Link href={`/user/${session?.id}`}>
                                    <span>{`${session.user.name}`}</span>
                                </Link>
                            </>
                        ) : (
                            <form action={async ()=> {
                                "use server";
                                await signIn("github");
                            }}>
                                <button type="submit">
                                    login
                                </button>
                            </form>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}
export default Navbar

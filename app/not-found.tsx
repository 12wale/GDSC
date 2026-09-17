import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#20B15A]">
                404
            </p>
            <h1 className="text-3xl font-semibold text-[#111111]">
                Page not found
            </h1>
            <p className="max-w-md text-[#555555]">
                The page you requested does not exist.
            </p>
            <Link
                href="/"
                className="rounded-xl bg-[#20B15A] px-6 py-3 font-semibold text-white hover:bg-[#168844]"
            >
                Return home
            </Link>
        </main>
    );
}

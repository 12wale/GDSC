"use client";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
            <h1 className="text-3xl font-semibold text-[#111111]">
                Something went wrong
            </h1>
            <p className="max-w-md text-[#555555]">
                We could not load this page. Please try again.
            </p>
            <button
                type="button"
                onClick={reset}
                className="rounded-xl bg-[#20B15A] px-6 py-3 font-semibold text-white hover:bg-[#168844]"
            >
                Try again
            </button>
        </main>
    );
}

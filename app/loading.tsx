export default function Loading() {
    return (
        <div className="flex min-h-[50vh] items-center justify-center" aria-label="Loading">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#20B15A]/20 border-t-[#20B15A]" />
        </div>
    );
}

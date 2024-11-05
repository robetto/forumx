import SearchForm from "@/components/SearchForm";
import ThreadCard from "@/components/ThreadCard";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;

    const posts = [
        {
            _createdAt: new Date(),
            views: 85,
            author: {
                _id: 1,
                name: "nome",
                image: "https://plus.unsplash.com/premium_photo-1704583083886-686622e6712c?q=80&w=1932"
            },
            id: 34,
            description: "this is description",
            image: "https://plus.unsplash.com/premium_photo-1704583083886-686622e6712c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "we robot",
            category: "dunno",
        },
    ];

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">ForumX</h1>
                <p className="sub-heading !max-w-3xl">Connect</p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Risultati per ${query}` : `Vedi tutti`}
                </p>

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post, index) => {
                            return <ThreadCard post={post} key={post.id} />;
                        })
                    ) : (
                        <p>Nessun post</p>
                    )}
                </ul>
            </section>
        </>
    );
}

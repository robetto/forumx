import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const ThreadCard = ({ post }: { post: ThreadTypeCard }) => {
    const {
        _id,
        _createdAt,
        views,
        image,
        description,
        author: { _id: authorId, name: authorName },
        title,
        category,
    } = post;

    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">{formatDate(_createdAt)}</p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>

            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">
                            {authorName}
                        </p>
                    </Link>
                    <Link href={`/startup/${post._id}`}>
                        <h3 className="text-26-semibold line-clamp-1">
                            {title}
                        </h3>
                    </Link>
                </div>

                <Link href={`/user/${authorId}`}>
                    <Image
                        src="https://placehold.co/48x48"
                        alt="placeholder"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                </Link>
            </div>

            <Link href={`/thread/${_id}`}>
                <p className="startup-card_desc">{description}</p>
                <img
                    src={image}
                    alt="placeholder"
                    className="startup-card_img"
                />
            </Link>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/thread/${_id}`}>
                        <span className="text-16-medium text-white">Details</span>
                    </Link>
                </Button>
            </div>
        </li>
    );
};

export default ThreadCard;

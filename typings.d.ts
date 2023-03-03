type Pagination={
    limit: Int;
    offset: Int;
    count: Int;
    total: Int;
};

type DataEntry={
    author: string | null;
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    category: string;
    language: string;
    country: string;
    published_at: string;
};

type NewsResponse={
    pagination: Pagination;
    data: DataEntry[];
};

type Category=
    | "general"
    | "business"
    | "entertainment"
    | "health"
    | "science"
    | "sports"
    | "technology"
;
import {useMemo} from 'react';
export const useSortedPosts = (posts, sort) => {
    // сортировка
    const sortedPosts = useMemo(() => {
        if(sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePostrs = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    // поиск из результатов сортировки
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts;

}
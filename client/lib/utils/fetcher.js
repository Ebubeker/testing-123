export const fetcher = (url) => fetch(`${process.env.NEXT_PUBLIC_CMS_BASE_URL}/${url}`).then((res) => res.json())
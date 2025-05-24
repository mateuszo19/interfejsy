export interface HeaderLinkInterface {
    title: string;
    url: string;
    highlighted: boolean;
}

export interface PageInterface extends HeaderLinkInterface {
    element: JSX.Element;
}


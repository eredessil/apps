interface IGridProps {
    children?: React.ReactNode;
    columns?: string;
    rows?: string;
    gap?: string;
}

interface IStyledGridProps {
    $gap?: string;
}

interface IGridItemProps {
    children?: React.ReactNode;
}

export type {IGridProps, IStyledGridProps, IGridItemProps};
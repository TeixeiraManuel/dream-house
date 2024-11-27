interface listFooterProps {
  title: string;
  oneItem: string;
  twoItem: string;
  threeItem: string;
}

export function ListFooter({
  title,
  oneItem,
  twoItem,
  threeItem,
}: listFooterProps) {
  return (
    <div className="space-y-4">
      <p className="font-bold text-slate-100 text-lg"> {title} </p>
      <ul className="text-secondary space-y-4">
        <li>
          <a href="">{oneItem}</a>
        </li>
        <li>
          <a href="">{twoItem}</a>
        </li>
        <li>
          <a href="">{threeItem}</a>
        </li>
      </ul>
    </div>
  );
}

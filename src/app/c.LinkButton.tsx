import Link from 'next/link';
export default function Button(props: any) {
  return (
    <Link className="link-button" {...props}>
      {props.children}
      <i className="line"></i>
    </Link>
  );
}

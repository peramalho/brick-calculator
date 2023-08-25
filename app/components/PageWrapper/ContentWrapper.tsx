type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ContentWrapper({ children, className }: Props) {
  return (
    <div className="max-w-[900px] w-full mx-auto flex-1 flex-col">
      {children}
    </div>
  );
}

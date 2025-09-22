interface ComponentWithTitleProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const ComponentWithTitle = ({ 
  title, 
  subtitle, 
  children, 
  className = '' 
}: ComponentWithTitleProps) => {
  return (
    <section className={`py-8 ${className}`}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

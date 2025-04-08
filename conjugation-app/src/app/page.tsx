import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="py-12">
      <section className="text-center mb-16">
        <div className="mb-6 flex justify-center">
          <div className="bg-white p-2 rounded-full inline-block shadow-lg">
            <div style={{ backgroundColor: 'var(--primary)' }} className="rounded-full p-4">
              <h1 className="text-6xl text-white font-bold mb-0 korean-heading">한</h1>
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-3 korean-heading">
          <span style={{ color: 'var(--primary)' }} className="mr-2">한국어</span> 
          <span style={{ color: 'var(--accent)' }} className="mr-2">활용</span> 
          <span style={{ color: 'var(--secondary)' }} className="mr-2">표</span>
        </h1>
        <h2 className="text-2xl mb-4">Korean Conjugation Practice</h2>
        <p className="text-xl korean-body max-w-3xl mx-auto" style={{ color: 'var(--color-black)' }}>
          한국어의 동사, 형용사, 그리고 명사를 쉽게 배우세요.
        </p>
        <p className="text-lg max-w-3xl mx-auto mt-2">
          Master Korean verbs, adjectives, and nouns with comprehensive conjugation tables and practice exercises.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <CategoryCard 
          title="동사" 
          enTitle="Verbs"
          description="Learn how to conjugate Korean verbs in different tenses and forms." 
          href="/verbs" 
          color="--primary"
        />
        <CategoryCard 
          title="형용사" 
          enTitle="Adjectives"
          description="Practice Korean adjective conjugation with comprehensive tables." 
          href="/adjectives" 
          color="--accent"
        />
        <CategoryCard 
          title="명사" 
          enTitle="Nouns"
          description="Study Korean nouns and their various forms with particle combinations." 
          href="/nouns" 
          color="--secondary"
        />
      </section>

      <section className="mt-16 text-center p-8 rounded-lg" style={{ backgroundColor: 'var(--color-blue-light)', color: 'white' }}>
        <h2 className="text-2xl font-bold mb-4 korean-heading">한국어 활용이 중요한 이유</h2>
        <h3 className="text-xl mb-4">Why Practice Korean Conjugation?</h3>
        <p className="text-lg max-w-3xl mx-auto mb-8 korean-body">
          활용을 익히는 것은 한국어를 유창하게 말하고 쓰는 데 필수적입니다.
          저희의 활용표와 연습을 통해 패턴을 쉬운 방법으로 익혔 수 있습니다.
        </p>
        <p className="text-lg max-w-3xl mx-auto">
          Mastering conjugation is essential for speaking and writing Korean fluently. 
          Our comprehensive tables and exercises will help you internalize the patterns.
        </p>
      </section>
      
      <div className="flex justify-center mt-12">
        <div className="flex gap-4">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }}></div>
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--color-red)' }}></div>
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--color-yellow)' }}></div>
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--color-white)', border: '1px solid #ccc' }}></div>
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--color-black)' }}></div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ 
  title, 
  enTitle,
  description, 
  href, 
  color 
}: { 
  title: string; 
  enTitle: string;
  description: string; 
  href: string;
  color: string;
}) {
  return (
    <div 
      className="rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4" 
      style={{ borderTopColor: `var(${color})` }}
    >
      <h2 className="text-2xl font-bold mb-1 korean-heading" style={{ color: `var(${color})` }}>{title}</h2>
      <h3 className="text-xl mb-3">{enTitle}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 korean-body">{description}</p>
      <Link 
        href={href}
        className="inline-block text-white font-medium py-2 px-4 rounded transition-colors"
        style={{ backgroundColor: `var(${color})` }}
      >
        <span className="korean-subheading">더 알아보기</span> <span className="text-sm">Explore</span>
      </Link>
    </div>
  );
}

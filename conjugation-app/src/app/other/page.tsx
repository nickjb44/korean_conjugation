export default function OtherPage() {
  return (
    <div className="py-8">
      <div className="border-b-4 pb-4 mb-8" style={{ borderColor: 'var(--color-yellow)' }}>
        <h1 className="text-4xl font-bold mb-2 korean-heading flex items-center">
          <span style={{ color: 'var(--highlight)' }}>기타</span>
          <span className="text-2xl ml-3 text-gray-600 dark:text-gray-300">Other Resources</span>
        </h1>
        <p className="text-lg korean-body mb-2">
          한국어 활용 외에도 다양한 학습 자료를 찾아보세요.
        </p>
        <p className="text-lg mb-2">
          This page will contain additional Korean language resources and learning materials beyond conjugation.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700">
        <div className="flex justify-center mb-6">
          <div style={{ backgroundColor: 'var(--color-yellow-light)' }} className="py-2 px-6 rounded-full text-gray-800 inline-block">
            <span className="font-korean font-bold mr-2">준비 중</span>
            <span className="text-sm">Coming Soon</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--highlight)' }}>
            <span className="text-black text-2xl font-bold korean-heading">학</span>
          </div>
          <p className="text-center text-lg korean-body mb-2" style={{ color: 'var(--highlight)' }}>
            다양한 한국어 학습 자료가 곱곱 들어올 예정입니다.
          </p>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Additional resources coming soon...
          </p>
        </div>

        {/* Example of what the layout will look like */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold mb-2 korean-subheading" style={{ color: 'var(--highlight)' }}>문법 책</h3>
            <p className="text-sm korean-body">추천 한국어 문법 책과 학습 자료</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold mb-2 korean-subheading" style={{ color: 'var(--highlight)' }}>온라인 강의</h3>
            <p className="text-sm korean-body">한국어 학습을 위한 온라인 강의 링크</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold mb-2 korean-subheading" style={{ color: 'var(--highlight)' }}>유튜브 채널</h3>
            <p className="text-sm korean-body">한국어 학습에 도움이 되는 유튜브 채널 목록</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 transition-shadow hover:shadow-md">
            <h3 className="text-lg font-bold mb-2 korean-subheading" style={{ color: 'var(--highlight)' }}>앱 추천</h3>
            <p className="text-sm korean-body">한국어 학습을 위한 모바일 애플리케이션 추천</p>
          </div>
        </div>
      </div>
    </div>
  );
}

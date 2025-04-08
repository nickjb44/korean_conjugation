export default function NounsPage() {
  return (
    <div className="py-8">
      <div className="border-b-4 pb-4 mb-8" style={{ borderColor: 'var(--secondary)' }}>
        <h1 className="text-4xl font-bold mb-2 korean-heading flex items-center">
          <span style={{ color: 'var(--secondary)' }}>명사</span>
          <span className="text-2xl ml-3 text-gray-600 dark:text-gray-300">Nouns</span>
        </h1>
        <p className="text-lg korean-body mb-2">
          한국어 명사와 조사의 결합 형태에 대해 배워보세요.
        </p>
        <p className="text-lg mb-2">
          This page will contain a comprehensive list of Korean nouns and their various forms with particle combinations.
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
          <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--secondary)' }}>
            <span className="text-white text-2xl font-bold korean-heading">명</span>
          </div>
          <p className="text-center text-lg korean-body mb-2" style={{ color: 'var(--secondary)' }}>
            명사 형태 표가 곱곱 들어올 예정입니다.
          </p>
          <p className="text-center text-gray-600 dark:text-gray-400">
            Noun form tables coming soon...
          </p>
        </div>

        {/* Example of what the layout will look like */}
        <div className="mt-12 border-t pt-6 border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 korean-subheading">명사 형태 예시:</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">기본형</th>
                  <th className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">주격 (이/가)</th>
                  <th className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">목적격 (을/를)</th>
                  <th className="px-4 py-3 bg-gray-50 dark:bg-gray-800 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">은/는</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-4 py-3 korean-body">책</td>
                  <td className="px-4 py-3 korean-body">책이</td>
                  <td className="px-4 py-3 korean-body">책을</td>
                  <td className="px-4 py-3 korean-body">책은</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

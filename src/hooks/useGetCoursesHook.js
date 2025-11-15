const useGetCoursesHook = async (courseId) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/courses`;
    if (courseId) url += `/${courseId}`;
    
    const rawResponse = await fetch(url);
    const response = await rawResponse.json();

    return { hasError: false, data: response ?? [] };
  } catch (error) {
    //console.error('Some unkwnown error have happened:' + error.message);
    return { hasError: true, error: error.message, data: [] };
  }
}

export default useGetCoursesHook;
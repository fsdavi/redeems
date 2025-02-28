export type Data = Record<string, string>;

const fetchCEPData = async (cep: string): Promise<Data> => {
  try {
    // Its okay this be public, because it's a public API :)
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    const data = await response.json();

    return data;
  } catch(error) {
    console.error(error);
    return {};
  }
}

export { fetchCEPData };
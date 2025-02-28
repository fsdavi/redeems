export type Data = Record<string, string>;

const fetchCEPData = async (cep: string): Promise<Data> => {
  try {
    // Its okay this be public, because it's a public API :)
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const data = await response.json();
  
    // Its necessary because the API dont return a error status code
    if (data.erro) {
      throw new Error("CEP inválido")
    }
  
    return data;
  } catch(error) {

    if (error instanceof Error && error.message === "CEP inválido") {
      throw error;
    }
    
    throw new Error("Failed to fetch CEP data");
  }
 
}

export { fetchCEPData };
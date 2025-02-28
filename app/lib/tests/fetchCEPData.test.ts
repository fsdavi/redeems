import { fetchCEPData } from '@/lib/fetchCEPData'; // adjust path as needed

describe('fetchCEPData', () => {
  const mockData = {
    cep: "00000-000",
    logradouro: "Logradouro",
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully for a valid CEP', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchCEPData("01001000");

    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith("https://viacep.com.br/ws/01001000/json/");
  });

  it('throws "CEP inválido" if the API response has { erro: true }', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ erro: true }),
    });

    await expect(fetchCEPData("99999999")).rejects.toThrow("CEP inválido");
  });

  it('throws "Failed to fetch CEP data"', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchCEPData("01234567")).rejects.toThrow("Failed to fetch CEP data");
  });
});

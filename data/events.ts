"use server";

interface Event {
  soon: boolean;
  place: string;
  date: string;
  lien: string;
  SOLDOUT: boolean;
}

export const getevents = async (): Promise<Event[]> => {
  try {
    const res = await fetch('https://pastebin.com/raw/nN3xzDyi');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: { DataList: Event[] } = await res.json();
    const events = data.DataList;

    return events;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error or handle it according to your needs
  }
};

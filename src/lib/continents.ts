export type Continent = 'afrique' | 'ameriques' | 'asie' | 'europe' | 'oceanie' | 'autre';

const C: Record<string, Continent> = {
  'RDC': 'afrique', 'République démocratique du Congo': 'afrique', 'Cameroun': 'afrique', 'Congo': 'afrique',
  'République centrafricaine': 'afrique', 'Tunisie': 'afrique', 'Sénégal': 'afrique', 'Guinée équatoriale': 'afrique',
  'Gabon': 'afrique', 'Togo': 'afrique', 'Niger': 'afrique', 'Maroc': 'afrique', 'Mali': 'afrique',
  'Madagascar': 'afrique', "Côte d'Ivoire": 'afrique', 'Burundi': 'afrique', 'Tchad': 'afrique',
  'Burkina Faso': 'afrique', 'Bénin': 'afrique', 'Ghana': 'afrique', 'Guinée': 'afrique', 'Éthiopie': 'afrique',
  'Kenya': 'afrique', 'Ouganda': 'afrique', 'Rwanda': 'afrique', 'Tanzanie': 'afrique', 'Mozambique': 'afrique',
  'Algérie': 'afrique', 'Égypte': 'afrique', 'Mauritanie': 'afrique', 'Zambie': 'afrique',
  'Panama': 'ameriques', 'Haïti': 'ameriques', 'Brésil': 'ameriques', 'Bolivie': 'ameriques', 'Équateur': 'ameriques',
  'Canada': 'ameriques', 'Pérou': 'ameriques', 'Colombie': 'ameriques', 'Mexique': 'ameriques', 'Guyane': 'ameriques',
  'Guatemala': 'ameriques', 'Honduras': 'ameriques', 'Nicaragua': 'ameriques',
  'Timor-Leste': 'asie', 'Thaïlande': 'asie', 'Sri Lanka': 'asie', 'Inde': 'asie', 'Arménie': 'asie', 'Laos': 'asie',
  'Cambodge': 'asie', 'Viêt Nam': 'asie', 'Vietnam': 'asie', 'Indonésie': 'asie', 'Philippines': 'asie', 'Liban': 'asie',
  'Jordanie': 'asie',
  'France': 'europe', 'Italie': 'europe', 'Belgique': 'europe', 'Espagne': 'europe', 'Portugal': 'europe',
  'Nouvelle-Calédonie': 'oceanie', 'Vanuatu': 'oceanie',
};

export const continent = (pays: string): Continent => C[pays] ?? 'autre';

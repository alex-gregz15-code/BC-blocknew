export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  targetAudience: 'commissioner' | 'researcher' | 'both';
}

export interface ActiveProposal {
  id: string;
  title: string;
  funding: string;
  field: string;
  status: 'Open' | 'Matching' | 'In Progress';
}
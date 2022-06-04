import { Member } from '../../response/member';

export const useMember = async (memberId: string): Promise<Member> => {
  const response = await fetch(`http://localhost:8000/api/members/${memberId}`);
  return await response.json();
}

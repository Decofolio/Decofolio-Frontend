import { useQuery } from '@tanstack/react-query';
import { Cookies } from 'react-cookie';
import api from '..';
import { TemplateListResponse } from './type';

const router = '/feed';

export const getTemplateList = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get('access_token');
  return useQuery({
    queryKey: ['feed'],
    queryFn: async () => {
      const { data } = await api.get<TemplateListResponse>(`/feed`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data; 
    },
  });
};

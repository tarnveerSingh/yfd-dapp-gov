import useContract from './useContractDGSF';
import queryPosition from 'utilities/messagesQuery/position';
import queryPositions from 'utilities/messagesQuery/positions';

const useQuery = () => {
  const { queryMsg } = useContract();
  const queryPositionFromStorage = async (contract: string) => {
    try {
      if (localStorage.getItem('position_idx') !== null) {
        const position_idx: string | null =
          localStorage.getItem('position_idx');
        const newQuery = queryPosition(position_idx);
        await queryMsg(contract, newQuery).then((result) => {
          console.log('Open Position:', result);
          return result;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const queryAllPositions = async (contract: string) => {
    try {
      const newQuery = queryPositions();
      return await queryMsg(contract, newQuery).then((result) => {
        return result;
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    queryPositionFromStorage,
    queryAllPositions
  };
};

export default useQuery;

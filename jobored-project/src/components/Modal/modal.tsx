import { Group, Button, Modal, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { addFavoriteId, useAppState } from 'store';

interface ModalProps {
  id: number;
}

export const ModalDelete = ({ id }: ModalProps) => {
  const {
    state: { favorites },
    dispatch,
  } = useAppState();
  const [opened, { close, open }] = useDisclosure(false);

  const isFavorite = favorites.ids.includes(id);

  const handleFavorite = () => {
    dispatch(addFavoriteId(id));
    close()
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        title=" Вы действительно хотите удалить вакансию из избранных?"
      >
        <Group mt="xl">
          <Button variant="outline" color="pink" onClick={handleFavorite}>
            Удалить
          </Button>
          <Button variant="outline" onClick={close}>
            Отмена
          </Button>
        </Group>
      </Modal>
      <Image
        width={22}
        src={isFavorite ? '../starfill.svg' : '../star.svg'}
        data-elem={`vacancy-${id}-shortlist-button`}
        alt="favourite"
        onClick={isFavorite ? open : handleFavorite}
        styles={() => ({
          image: {
            cursor: 'pointer',
            '&:hover': {
              filter: 'invert(.5) sepia(1) saturate(5) hue-rotate(175deg)',
            },
          },
        })}
      />
    </>
  );
};

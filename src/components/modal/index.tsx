import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from 'material-ui';
import EditTask from '../input/editTask';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ setOpenModal, data }: any) {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Editar Tarefa
                    </Typography>
                    <EditTask 
                        data={data}
                        setOpenModal={setOpenModal}
                    />
                </Box>
            </Modal>
        </div>
    );
}
import React from 'react'
import { Divider, IconButton, Menu } from 'react-native-paper';

export default function MenuComponent ({ onEdit, onDelete }: { onEdit: () => void, onDelete: () => void }) {

    const [visible, setVisible] = React.useState(false);
    const closeMenu = () => setVisible(false);
    const openMenu = () => setVisible(true);

    return (<Menu
        style={{ marginTop: 50 }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}>
        <Menu.Item onPress={onEdit} title="edit" />
        <Divider />
        <Menu.Item onPress={onDelete} title="delete" />
    </Menu>)
}



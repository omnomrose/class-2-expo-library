import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, CheckBox, Avatar, Badge, ListItem } from '@rneui/themed';




export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Solid" disabled />
            <Button title="Outline" type="outline" disabled />
            <Button title="Clear" type="clear" disabled />

            <CheckBox checked size={18} />
            <CheckBox checked size={24} />
            <CheckBox checked size={32} />

            <Avatar
                size={32}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
            />
            <Avatar
                size={32}
                rounded
                source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
            />

            <Badge value="3" status="success" />
            <Badge value="99+" status="error" />
            <Badge value="500" status="primary" />
            <Badge value="10" status="warning" />
            <ListItem bottomDivider>
                <Avatar
                    rounded
                    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
                />
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>President</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar
                    rounded
                    icon={{
                        name: "person-outline",
                        type: "material",
                        size: 26,
                    }}
                    containerStyle={{ backgroundColor: "#c2c2c2" }}
                />
                <ListItem.Content>
                    <ListItem.Title>Alba King</ListItem.Title>
                    <ListItem.Subtitle>Vice President</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem>
                <Avatar rounded title="A" containerStyle={{ backgroundColor: "grey" }} />
                <ListItem.Content>
                    <ListItem.Title>Adam Eva</ListItem.Title>
                    <ListItem.Subtitle>Vice Chairman</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

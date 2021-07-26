import React from 'react';

import {
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
} from 'react-native';

const DashboardModal = ({modalVisible, setModalVisible}) => {
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
        >
        <View style={{flex:1, backgroundColor: 'rgba(52, 52, 52, 0.9)', opacity: 1}}>
            <Pressable style={{padding: 10}} onPress={()=> setModalVisible(!modalVisible)}>
            <Text style={{alignSelf: 'flex-end', color: 'white', marginRight: 10, fontSize: 25}}>྾</Text>
            </Pressable>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
                <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Cycle Times</Text>
                </View>
                <View style={{margin: 20, marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                    Printer Cycle Time
                </Text>
                <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
                <View style={{margin: 20, marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                    Oven Cycle Time
                </Text>
                <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
            </View>
            <View style={{backgroundColor: '#B8B8B8', borderRadius: 10, margin: 5}}>
                <View style={{padding: 10, borderBottomColor: 'white', borderWidth: 1}}>
                <Text style={{color: '#363636', fontSize: 20, marginLeft: 10}}>Scanned Components</Text>
                </View>
                <View style={{margin: 20, marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                    Lot number
                </Text>
                <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
                <View style={{margin: 20, marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                    Screen
                </Text>
                <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
                <View style={{margin: 20, marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                    Squeegee
                </Text>
                <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
                <View style={{margin: 20, marginBottom: 0}}>
                <Text style={{fontSize: 15, color: '#363636'}}>
                    Paste
                </Text>
                <TextInput style={{backgroundColor: 'white', borderRadius: 10, margin: 5}}/>
                </View>
            </View>
         </ScrollView>
        </View>
    </Modal>
    )
}
export default DashboardModal;
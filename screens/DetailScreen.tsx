import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, ListRenderItem } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { findAllProduct, findProducbyId } from "../service/product-service";
import { ListItem } from "@rneui/base";
import { StyleSheet } from "react-native";
import { Tile } from '@rneui/themed';
import { Dimensions } from "react-native";
 
const DetailScreen = (): React.JSX.Element => {
  const [showLog, setShowLog] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<Boolean>(false);
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { id, title } = route.params as {
    id: string;
    title: string;
  };
 
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation, route]);
 
  const getProductsID = async () => {
    try {
      setLoading(true);
      console.log(id)
      const response = await findProducbyId(id);
      console.log(JSON.stringify(response.data.data));
      setShowLog(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
 
  React.useEffect(() => {
    getProductsID();
  },[])
 
  const _renderItem: ListRenderItem<any> = ({ item }: { item: any }) => {
    return (
      <>
<Tile
                imageSrc={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh88yxZpnjhaBRsT9_95t7a2Ti02_jy1tipg&s',
                    cache: 'force-cache',
                }}
                title={item.ch_title}
                titleStyle={styles.titleStyle}
                containerStyle={styles.tileContainer}
                caption={item.ch_dateadd}
                captionStyle={styles.captionStyle}
                featured
                activeOpacity={0.9}
                width={Dimensions.get('screen').width-20} // ลบขอบเล็กน้อยทั้งสองข้าง
            />
      </>
    );
  };
 
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={showLog}
          renderItem={_renderItem}
          keyExtractor={(item) => item.ch_id}
          refreshing={loading}
          onRefresh={getProductsID}
        />
      )}
    </View>
  );
};



export default DetailScreen;


const styles = StyleSheet.create({
    container: {
    backgroundColor: '#f0f0f0', // สีพื้นหลัง
    },
    listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
    },
    titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', // สีขาวส าหรับชื่อ
    },
    tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: 'hidden', //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
    },
    captionStyle: {
    fontSize: 14,
    color: 'blue' // สีขาวส าหรับวันที่
    },
    });
import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ActivityIndicator, ListRenderItem } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { findAllProduct, findProducbyId } from "../service/product-service";
import { ListItem } from "@rneui/base";
 
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
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{item.ch_title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
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
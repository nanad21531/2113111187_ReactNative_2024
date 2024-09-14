import {
    View,
    Text,
    Button,
    Alert,
    FlatList,
    ListRenderItem,
    ActivityIndicator,
  } from "react-native";
  import React, { useCallback, useLayoutEffect, useState } from "react";
  import { useFocusEffect, useNavigation } from "@react-navigation/native";
  ("@react-navigation/native");
  import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
  import {
    HeaderButton,
    HeaderButtons,
    Item,
  } from "react-navigation-header-buttons";
  import { findAllProduct } from "../service/product-service";
  import { ListItem, Avatar } from "@rneui/themed";
  import { Badge } from "@rneui/base";
   
  const MaterialHeaderButton = (props: any) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
  );
   
  const ProductScreen = (): React.JSX.Element => {
    const navigation = useNavigation<any>();
    const [product, setProduct] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useLayoutEffect(() => {
      navigation.setOptions({
        title: "หน้าหลัก",
        headerTitleAlign: "center",
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
            <Item
              title="menu"
              iconName="menu"
              onPress={() => {
                // Alert.alert("Open Menu", "Hello React Native");
                navigation.openDrawer();
              }}
            />
          </HeaderButtons>
        ),
      });
    }, [navigation]);
   
    const getProduct = async () => {
      try {
        setLoading(true);
        const response = await findAllProduct();
        //console.log(response.data.data);
        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
   
    useFocusEffect(
      useCallback(() => {
        getProduct();
      }, [])
    );
   
    const _renderItem: ListRenderItem<any> = ({ item }: { item: any }) => {
      return (
        <>
          <ListItem
            bottomDivider
            onPress={() => {
              navigation.navigate("Detail", {
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Avatar source={{ uri: item.picture }} size={50} rounded />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            <Badge value={item.view} status="success" />
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
            data={product}
            renderItem={_renderItem}
            keyExtractor={(item: any) => item.id}
            onRefresh={async () => {
              await getProduct();
            }}
            refreshing={loading}
          />
        )}
      </View>
    );
  };
   
  export default ProductScreen;
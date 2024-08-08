import { View } from "react-native";
import React from "react";

import { useGlobalContext } from "@/context/GlobalProvider";
import { Button } from "@/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "@/components/Header";
import { Text } from "@/components/ui/text";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

const Home = () => {
    const { signOut } = useGlobalContext();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="" />
            {/* <Text>Hello,</Text>
            <Text>Enjelin Morgeana</Text> */}
            <View className="px-6">
                <View className="absolute bottom-0 flex w-full justify-center rounded-2xl bg-primary p-6">
                    <View className="flex flex-row items-center justify-between">
                        <View className="flex-row items-center gap-1">
                            <Text className="font-pmedium text-xl text-primary-foreground">
                                Total Balance
                            </Text>
                            <Button size={"sm"} variant={"ghost"}>
                                <FontAwesome
                                    name="caret-up"
                                    size={24}
                                    color="white"
                                />
                            </Button>
                        </View>
                        <Button variant={"ghost"}>
                            <Entypo
                                name="dots-three-horizontal"
                                size={24}
                                color="white"
                            />
                        </Button>
                    </View>
                    <Text className="mb-8 font-psemibold text-3xl text-primary-foreground">
                        $2,548.00
                    </Text>
                    <View className="flex flex-row items-center justify-between">
                        <View>
                            <View className="flex flex-row items-center gap-1">
                                <View className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                                    <FontAwesome
                                        name="arrow-down"
                                        size={16}
                                        color="white"
                                    />
                                </View>
                                <Text className="font-pmedium text-xl text-primary-foreground">
                                    Income
                                </Text>
                            </View>
                            <Text className="font-pmedium text-xl text-primary-foreground">
                                $1,840.00
                            </Text>
                        </View>
                        <View>
                            <View className="flex flex-row items-center gap-1">
                                <View className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20">
                                    <FontAwesome
                                        name="arrow-up"
                                        size={16}
                                        color="white"
                                    />
                                </View>
                                <Text className="font-pmedium text-xl text-primary-foreground">
                                    Expenses
                                </Text>
                            </View>
                            <Text className="text-right font-pmedium text-xl text-primary-foreground">
                                $284.00
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className="px-6 py-2">
                <View className="flex flex-row items-center justify-between">
                    <Text className="font-psemibold">Transactions History</Text>
                    <Button variant={"ghost"}>
                        <Text className="font-pmedium">See all</Text>
                    </Button>
                </View>
            </View>

            {/* <Button
                onPress={() => {
                    signOut();
                }}
                className="mb-4 w-full rounded-full bg-white"
                size={"lg"}
            >
                <Text>delete local storage</Text>
            </Button> */}
        </SafeAreaView>
    );
};

export default Home;

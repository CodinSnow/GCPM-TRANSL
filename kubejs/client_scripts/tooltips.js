ItemEvents.tooltip((event) => {
  // Disabled Items
  event.add(
    [
      "sophisticatedbackpacks:inception_upgrade",
      "sophisticatedbackpacks:battery_upgrade",
      "storagedrawers:redstone_upgrade",
      "storagedrawers:min_redstone_upgrade",
      "storagedrawers:max_redstone_upgrade",
      "storagedrawers:compacting_drawers_2",
      "storagedrawers:compacting_drawers_3",
      "storagedrawers:compacting_half_drawers_2",
      "storagedrawers:compacting_half_drawers_3",
      "storagedrawers:fill_level_upgrade",

      "expatternprovider:caner",
      "ae2:inscriber",
      "expatternprovider:ex_inscriber",
      "expatternprovider:ingredient_buffer"
    ],
    Text.red("在这个整合包中被禁用！").bold(true)
  );

  event.add("gtceu:greenhouse", Text.gray("两个绿色大拇哥！"));
  event.add(
    "gtceu:construction_core",
    Text.gray("让搭建方块更便宜！")
  );
  event.add(
    "gtceu:construction_core",
    Text.darkGray("需要建筑泡沫才能工作。")
  );

  event.add("ae2:controller", Text.gray("频道被§c禁用§7了。"));

  event.add("expatternprovider:fishbig", Text.gray("恭喜！你赢得我的世界了。"));

  event.add(["enderstorage:ender_chest", "enderstorage:ender_tank", "enderstorage:ender_pouch"],
    Text.red("警告：这些物品已经弃用，并将在未来更新中移除。\n请在工作台中将它们转换为GT覆盖板。")
  );

  event.add("storagedrawers:personal_key_ftb", Text.gray("将普通私人钥匙放进合成网格中来合成。"));
});

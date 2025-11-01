ItemEvents.tooltip((event) => {
  // Disabled Items
  event.add(
    [
      "sophisticatedbackpacks:inception_upgrade",
      "sophisticatedbackpacks:battery_upgrade",
      "storagedrawers:redstone_upgrade",
      "storagedrawers:min_redstone_upgrade",
      "storagedrawers:max_redstone_upgrade",
      "storagedrawers:compacting_drawers_3",
      "storagedrawers:fill_level_upgrade",
      "storagedrawers:illumination_upgrade",

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
});

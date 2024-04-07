import React, {useCallback, useEffect} from "react";
import type {IUserStoriesFilters} from "./types";
import {Row} from "@components/base";
import {Chip} from "@components/chip";
import {CHIP_TYPE} from "@components/chip/types/ChipType.enum.ts";

const mapIdToChipType = (id: string) => {
  switch (id) {
    case '1':
      return CHIP_TYPE.BLUE;
    case '2':
      return CHIP_TYPE.PURPLE;
    case '3':
      return CHIP_TYPE.PINK;
    case '4':
      return CHIP_TYPE.PINK;
    case '5':
      return CHIP_TYPE.GREEN;
    default:
      return CHIP_TYPE.NEUTRAL;
  }
}

const UserStoriesFilters: React.FC<IUserStoriesFilters> = ({features, onChange}) => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>(features.map((feature) => feature.id));

  const handlePress = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  useEffect(() => {
    onChange(selectedIds);
  }, [selectedIds, onChange]);

  useEffect(() => {
    setSelectedIds(features.map(feature => feature.id));
  }, [features]);

  const isSelected = useCallback((id: string) => {
    return selectedIds.includes(id);
  }, [selectedIds]);

  return (
    <Row rowGap={'xs'} columnGap={'xs'}>
      {features.map((feature) => (
        <Chip
          text={feature.title}
          onPress={() => handlePress(feature.id)}
          selected={isSelected(feature.id)}
          type={mapIdToChipType(feature.id)}
          key={feature.id}/>
      ))}
    </Row>
  );
}

export default UserStoriesFilters;
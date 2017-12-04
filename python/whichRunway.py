def runway_picker(runway_directions, wind_direction):
    wind_direction_int = int(wind_direction)
    differences = []

    for runway in runway_directions:
        differences.append(abs(wind_direction_int - runway))

    return differences.index(max(differences))

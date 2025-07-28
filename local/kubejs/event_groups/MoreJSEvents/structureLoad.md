# MoreJSEvents.structureLoad

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: StructureLoadEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| getEntities |  |  | EntityInfoWrapper | ✘ |
| invoke | StructureTemplate, ResourceLocation |  | void | ✔ |
| getId |  |  | String | ✘ |
| getPalette | int |  | PaletteWrapper | ✘ |
| getStructureSize |  |  | Vec3i | ✘ |
| getPalettesSize |  |  | int | ✘ |
| getEntitiesSize |  |  | int | ✘ |
| removePalette | int |  | void | ✘ |
| forEachPalettes | Consumer<PaletteWrapper> |  | void | ✘ |
| success |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |


### Documented members:

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```



### Example script:

```js
MoreJSEvents.structureLoad((event) => {
	// This space (un)intentionally left blank
});
```


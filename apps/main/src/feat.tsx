import { createResource, createSignal, For, Show } from "solid-js"
import { assert } from "@private_org/assert"
import { Img } from "@private_org/solid-img"

import * as styles from "./feat.css"

type Pokemon = {
  name: string
  id: number
  types: (keyof typeof typesToHex)[]
  front: string
  back: string
}

async function fetchResources<K extends string>(key: K) {
  let r = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`)
  assert(r.ok)
  let body = await r.json()

  let poke: Pokemon = {
    name: body.name,
    id: body.id,
    types: body.types.map((x: { type: { name: string } }) => x.type.name),
    front: body.sprites.front_default,
    back: body.sprites.back_default
  }

  return poke
}

let typesToHex = {
  bug: { bg: "#b0bc44", fg: "black" },
  dark: { bg: "#6f5b4c", fg: "white" },
  dragon: { bg: "#7764df", fg: "black" },
  electric: { bg: "#f6c853", fg: "black" },
  fairy: { bg: "#ed6fd0", fg: "black" },
  fight: { bg: "#9a573f", fg: "white" },
  fire: { bg: "#e55e3f", fg: "black" },
  flying: { bg: "#9facf1", fg: "black" },
  ghost: { bg: "#6363b0", fg: "white" },
  grass: { bg: "#8ecc63", fg: "black" },
  ground: { bg: "#d2b86b", fg: "black" },
  ice: { bg: "#7acbe4", fg: "black" },
  normal: { bg: "#aca596", fg: "black" },
  poison: { bg: "#a95fa1", fg: "black" },
  psychic: { bg: "#ee7ba4", fg: "black" },
  rock: { bg: "#b9a665", fg: "black" },
  steel: { bg: "#adadc4", fg: "black" },
  water: { bg: "#569af8", fg: "black" }
} as const

function Feature() {
  let name = "ferrothorn"
  let [on, setOn] = createSignal(false)
  let [x] = createResource(name, fetchResources)

  return (
    <div class={styles.pokeCard}>
      <h2 class={styles.pokeTitle}>{x()?.name}</h2>
      <span class={styles.pokeId}>{"#" + x()?.id}</span>
      <div class={styles.pokeTypes}>
        <ul>
          <For each={x()?.types}>
            {(t) => (
              <li
                style={{
                  "background-color": typesToHex[t].bg,
                  color: typesToHex[t].fg
                }}
              >
                {t}
              </li>
            )}
          </For>
        </ul>
      </div>

      <div class={styles.pokeImg}>
        <Show
          when={on()}
          fallback={
            <Img
              class={styles.pokeImg}
              src={x()?.front!}
              alt={`Front of ${name}`}
              height="240px"
              width="240px"
            />
          }
        >
          <Img
            class={styles.pokeImg}
            src={x()?.back!}
            alt={`Back of ${name}`}
            height="240px"
            width="240px"
          />
        </Show>
        <button
          class={styles.toggle}
          type="button"
          aria-aria-pressed={on()}
          onClick={() => {
            setOn((v) => !v)
          }}
        >
          Flip
        </button>
      </div>
    </div>
  )
}

export { Feature }

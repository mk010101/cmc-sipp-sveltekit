import { goto } from '$app/navigation';
import { page } from '$app/stores';

export function gogoNext(e: Event) {
  //const current = page.route.id;
  goto('/gender');
  e.preventDefault();
  const b = page.subscribe((p) => {
    console.log(p);
  });
}

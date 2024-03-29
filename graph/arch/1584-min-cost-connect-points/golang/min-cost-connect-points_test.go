package main

import (
	"container/heap"
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestPoint(t *testing.T) {
	assert.Equal(t, 10, makePoint(0, 0).distance(makePoint(0, 10)))
	assert.Equal(t, 10, makePoint(0, 10).distance(makePoint(0, 0)))
	assert.Equal(t, 10, makePoint(0, 0).distance(makePoint(10, 0)))
	assert.Equal(t, 10, makePoint(10, 0).distance(makePoint(0, 0)))
	assert.Equal(t, 11, makePoint(10, 1).distance(makePoint(20, 2)))
}

func TestMinSpanningTreeKruskal(t *testing.T) {
	testMinSpanningTree(t, kruskal)
}

func TestMinSpanningTreePrim(t *testing.T) {
	testMinSpanningTree(t, func(n int, xs []Edge) []Edge { return prim(NewGraph(n, xs)) })
}

func testMinSpanningTree(t *testing.T, mst func(int, []Edge) []Edge) {
	sorted := func(xs []Edge) []Edge {
		sort.Slice(xs, func(i, j int) bool {
			if xs[i].u < xs[j].u {
				return true
			}
			if xs[i].u > xs[j].u {
				return false
			}
			if xs[i].v < xs[j].v {
				return true
			}
			if xs[i].v > xs[j].v {
				return false
			}
			return xs[i].w < xs[j].w
		})
		return xs
	}

	assert.Equal(t,
		[]Edge{{0, 1, 10}},
		sorted(mst(2, []Edge{{0, 1, 10}})))

	assert.Equal(t,
		[]Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}},
		sorted(mst(4, []Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}, {2, 3, 20}})))

	assert.Equal(t,
		[]Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}, {4, 5, 1}},
		sorted(mst(6, []Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}, {2, 3, 20}, {4, 5, 1}})))
}

func TestMinCostConenctPointsKruskal(t *testing.T) {
	testMinCostConnectPoints(t, minCostConnectPointsKruskal)
}

func TestMinCostConenctPointsPrim(t *testing.T) {
	testMinCostConnectPoints(t, minCostConnectPointsPrim)
}

func TestMinCostConenctPointsDijkstra(t *testing.T) {
	testMinCostConnectPoints(t, minCostConnectPointsDijkstra)
}

func testMinCostConnectPoints(t *testing.T, minCostConnectPoints func([][]int) int) {
	assert.Equal(t, 20, minCostConnectPoints([][]int{{0, 0}, {2, 2}, {3, 10}, {5, 2}, {7, 0}}))
	assert.Equal(t, 18, minCostConnectPoints([][]int{{3, 12}, {-2, 5}, {-4, 1}}))
}

func TestUnionFind(t *testing.T) {
	u := NewUnionFind(6)
	assert.True(t, u.Connect(0, 1))
	assert.True(t, u.Connect(2, 3))
	assert.True(t, u.Connect(3, 4))
	assert.False(t, u.Connect(2, 4))
	assert.Equal(t, u.Find(0), u.Find(1))
	assert.Equal(t, u.Find(2), u.Find(3))
	assert.Equal(t, u.Find(3), u.Find(4))
	assert.NotEqual(t, u.Find(0), u.Find(5))
	assert.NotEqual(t, u.Find(2), u.Find(5))
}

func TestBitSet(t *testing.T) {
	assert.Equal(t, 10, NewBitSet(10).Size())
	assert.Equal(t, 0, NewBitSet(0).Capacity())
	assert.Equal(t, 64, NewBitSet(63).Capacity())
	assert.Equal(t, 64, NewBitSet(64).Capacity())
	assert.Equal(t, 2*64, NewBitSet(65).Capacity())

	s := NewBitSet(10)
	s.Add(5)
	assert.True(t, s.Has(5))
	s.Remove(5)
	assert.False(t, s.Has(5))
}

func TestGraph(t *testing.T) {
	g := NewGraph(4, []Edge{
		{0, 1, 1}, {0, 2, 2},
		{1, 3, 10},
		{2, 3, 20},
	})
	assert.Equal(t, 4, len(g))
	assert.Equal(t, 2, len(g[0]))
	assert.Equal(t, 2, len(g[1]))
	assert.Equal(t, 2, len(g[2]))
	assert.Equal(t, 2, len(g[3]))
}

func TestHeap(t *testing.T) {
	h := EdgeHeap{{0, 1, 1}, {1, 3, 10}, {0, 2, 2}, {2, 3, 20}}
	heap.Init(&h)
	assert.Equal(t, 4, h.Len())

	xs := make([]Edge, 0, h.Len())
	for h.Len() > 0 {
		xs = append(xs, heap.Pop(&h).(Edge))
	}
	assert.Equal(t, []Edge{{0, 1, 1}, {0, 2, 2}, {1, 3, 10}, {2, 3, 20}}, xs)
}

func TestPriorityQueue(t *testing.T) {
	pipe := func(xs []VertexDistance) (ys []VertexDistance) {
		pq := NewPriorityQueue()
		for i := 0; i < len(xs); i++ {
			pq.Put(xs[i].v, xs[i].d)
		}
		ys = make([]VertexDistance, pq.Len())
		for i := 0; i < len(ys); i++ {
			ys[i] = heap.Pop(pq).(VertexDistance)
		}
		return
	}

	assert.Equal(t,
		[]VertexDistance{{0, 0}, {1, 10}, {2, 20}},
		pipe([]VertexDistance{{0, 0}, {1, 10}, {2, 20}}))

	assert.Equal(t,
		[]VertexDistance{{0, 0}, {2, 20}, {1, 100}},
		pipe([]VertexDistance{{0, 0}, {1, 10}, {2, 20}, {1, 100}}))
}

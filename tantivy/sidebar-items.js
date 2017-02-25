initSidebarItems({"enum":[["Error","Generic tantivy error."],["SegmentPostingsOption","Object describing the amount of information required when reading a postings."]],"fn":[["version","Expose the current version of tantivy, as well whether it was compiled with the simd compression."]],"mod":[["collector","Collector module"],["directory","Directory module"],["merge_policy","Tantivy's makes it possible to personalize when the indexer should merge its segments"],["postings","Postings module (also called inverted index)"],["query","Query module"],["schema","Schema # Schema definition"]],"struct":[["DocAddress","`DocAddress` contains all the necessary information to identify a document given a `Searcher` object."],["Document","Tantivy's Document is the object that can be indexed and then searched for.  "],["Index","Tantivy's Search Index"],["IndexWriter","`IndexWriter` is the user entry-point to add document to an index."],["Searcher","Holds a list of `SegmentReader`s ready for search."],["Segment","A segment is a piece of the index."],["SegmentId","Tantivy SegmentId."],["SegmentMeta","SegmentMeta contains simple meta information about a segment."],["SegmentReader","Entry point to access all of the datastructures of the `Segment`"],["Term","Term represents the value that the token can take."],["TermIterator","Given a list of sorted term streams, returns an iterator over sorted unique terms."],["TimerTree","Timer tree"]],"trait":[["Directory","Write-once read many (WORM) abstraction for where tantivy's data should be stored. "],["DocSet","Represents an iterable set of sorted doc ids."],["Postings","Postings (also called inverted list)"]],"type":[["DocId","u32 identifying a document within a segment. Documents have their doc id assigned incrementally, as they are added in the segment."],["Result","Tantivy result."],["Score","f32 the score of a document."],["SegmentLocalId","A segment local id identifies a segment. It only makes sense for a given searcher."]]});
﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cofoundry.Domain
{
    /// <summary>
    /// Queries for retieving a set of pages using a batch of 
    /// database ids. The Cofoundry.Core dictionary extensions can be 
    /// useful for ordering the results e.g. results.FilterAndOrderByKeys(ids).
    /// </summary>
    public interface IAdvancedContentRepositoryPageByIdRangeQueryBuilder
        : IContentRepositoryPageByIdRangeQueryBuilder
    {
        /// <summary>
        /// Finds pages with the specified page ids and returns them as PageSummary 
        /// objects. Note that this query does not account for WorkFlowStatus and so
        /// pages will be returned irrecpective of whether they aree published or not.
        /// </summary>
        Task<IDictionary<int, PageSummary>> AsSummariesAsync();
    }
}
